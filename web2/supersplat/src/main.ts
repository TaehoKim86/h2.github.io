import { Color, createGraphicsDevice } from 'playcanvas';

import { EditHistory } from './edit-history';
import { registerEditorEvents } from './editor';
import { Events } from './events';
import { initFileHandler } from './file-handler';
import { initMaterials } from './material';
import { Scene } from './scene';
import { getSceneConfig } from './scene-config';
import { registerSelectionEvents } from './selection';
import { Shortcuts } from './shortcuts';
import { BrushSelection } from './tools/brush-selection';
import { LassoSelection } from './tools/lasso-selection';
import { MoveTool } from './tools/move-tool';
import { PolygonSelection } from './tools/polygon-selection';
import { RectSelection } from './tools/rect-selection';
import { RotateTool } from './tools/rotate-tool';
import { ScaleTool } from './tools/scale-tool';
import { SphereSelection } from './tools/sphere-selection';
import { ToolManager } from './tools/tool-manager';
import { registerTransformHandlerEvents } from './transform-handler';
import { EditorUI } from './ui/editor';
import { AssetLoader } from './asset-loader.js';

declare global {
    interface LaunchParams {
        readonly files: FileSystemFileHandle[];
    }

    interface Window {
        launchQueue: {
            setConsumer: (callback: (launchParams: LaunchParams) => void) => void;
        };
        scene: Scene;
    }
}

const getURLArgs = () => {
    // extract settings from command line in non-prod builds only
    const config = {};

    const apply = (key: string, value: string) => {
        let obj: any = config;
        key.split('.').forEach((k, i, a) => {
            if (i === a.length - 1) {
                obj[k] = value;
            } else {
                if (!obj.hasOwnProperty(k)) {
                    obj[k] = {};
                }
                obj = obj[k];
            }
        });
    };

    const params = new URLSearchParams(window.location.search.slice(1));
    params.forEach((value: string, key: string) => {
        apply(key, value);
    });

    return config;
};

const initShortcuts = (events: Events) => {
    const shortcuts = new Shortcuts(events);

    shortcuts.register(['Delete', 'Backspace'], { event: 'select.delete' });
    shortcuts.register(['Escape'], { event: 'tool.deactivate' });
    shortcuts.register(['Tab'], { event: 'selection.next' });
    shortcuts.register(['1'], { event: 'tool.move', sticky: true });
    shortcuts.register(['2'], { event: 'tool.rotate', sticky: true });
    shortcuts.register(['3'], { event: 'tool.scale', sticky: true });
    shortcuts.register(['G', 'g'], { event: 'grid.toggleVisible' });
    shortcuts.register(['C', 'c'], { event: 'tool.toggleCoordSpace' });
    shortcuts.register(['F', 'f'], { event: 'camera.focus' });
    shortcuts.register(['R', 'r'], { event: 'tool.rectSelection', sticky: true });
    shortcuts.register(['P', 'p'], { event: 'tool.polygonSelection', sticky: true });
    shortcuts.register(['L', 'l'], { event: 'tool.lassoSelection', sticky: true });
    shortcuts.register(['B', 'b'], { event: 'tool.brushSelection', sticky: true });
    shortcuts.register(['A', 'a'], { event: 'select.all' });
    shortcuts.register(['A', 'a'], { event: 'select.none', shift: true });
    shortcuts.register(['I', 'i'], { event: 'select.invert' });
    shortcuts.register(['H', 'h'], { event: 'select.hide' });
    shortcuts.register(['U', 'u'], { event: 'select.unhide' });
    shortcuts.register(['['], { event: 'tool.brushSelection.smaller' });
    shortcuts.register([']'], { event: 'tool.brushSelection.bigger' });
    shortcuts.register(['Z', 'z'], { event: 'edit.undo', ctrl: true });
    shortcuts.register(['Z', 'z'], { event: 'edit.redo', ctrl: true, shift: true });
    shortcuts.register(['M', 'm'], { event: 'camera.toggleMode' });
    shortcuts.register(['D', 'd'], { event: 'dataPanel.toggle' });
    shortcuts.register([' '], { event: 'camera.toggleOverlay' });

    return shortcuts;
};

const main = async () => {
    const url = new URL(window.location.href);

    // decode remote storage details
    let remoteStorageDetails;
    try {
        remoteStorageDetails = JSON.parse(decodeURIComponent(url.searchParams.get('remoteStorage')));
    } catch (e) { }

    // root events object
    const events = new Events();

    // edit history
    const editHistory = new EditHistory(events);

    // editor ui
    const editorUI = new EditorUI(events, !!remoteStorageDetails);

    // create the graphics device
    const graphicsDevice = await createGraphicsDevice(editorUI.canvas, {
        deviceTypes: ['webgl2'],
        antialias: false,
        depth: false,
        stencil: false,
        xrCompatible: false,
        powerPreference: 'high-performance'
    });

    // monkey-patch materials for premul alpha rendering
    initMaterials();

    const overrides = [
        getURLArgs()
    ];

    // resolve scene config
    const sceneConfig = getSceneConfig(overrides);

    // construct the manager
    const scene = new Scene(
        events,
        sceneConfig,
        editorUI.canvas,
        graphicsDevice
    );

    // colors
    const bgClr = new Color(0, 0, 0, 1);
    const selectedClr = new Color(1, 1, 0, 1.0);
    const unselectedClr = new Color(0, 0, 1, 0.5);
    const lockedClr = new Color(0, 0, 0, 0.05);

    const setClr = (target: Color, value: Color, event: string) => {
        if (!target.equals(value)) {
            target.copy(value);
            events.fire(event, target);
        }
    };

    const setBgClr = (clr: Color) => {
        setClr(bgClr, clr, 'bgClr');
    };
    const setSelectedClr = (clr: Color) => {
        setClr(selectedClr, clr, 'selectedClr');
    };
    const setUnselectedClr = (clr: Color) => {
        setClr(unselectedClr, clr, 'unselectedClr');
    };
    const setLockedClr = (clr: Color) => {
        setClr(lockedClr, clr, 'lockedClr');
    };

    events.on('setBgClr', (clr: Color) => {
        setBgClr(clr);
    });
    events.on('setSelectedClr', (clr: Color) => {
        setSelectedClr(clr);
    });
    events.on('setUnselectedClr', (clr: Color) => {
        setUnselectedClr(clr);
    });
    events.on('setLockedClr', (clr: Color) => {
        setLockedClr(clr);
    });

    events.function('bgClr', () => {
        return bgClr;
    });
    events.function('selectedClr', () => {
        return selectedClr;
    });
    events.function('unselectedClr', () => {
        return unselectedClr;
    });
    events.function('lockedClr', () => {
        return lockedClr;
    });

    events.on('bgClr', (clr: Color) => {
        const cnv = (v: number) => `${Math.max(0, Math.min(255, (v * 255))).toFixed(0)}`;
        document.body.style.backgroundColor = `rgba(${cnv(clr.r)},${cnv(clr.g)},${cnv(clr.b)},1)`;
    });
    events.on('selectedClr', (clr: Color) => {
        scene.forceRender = true;
    });
    events.on('unselectedClr', (clr: Color) => {
        scene.forceRender = true;
    });
    events.on('lockedClr', (clr: Color) => {
        scene.forceRender = true;
    });

    setBgClr(new Color(sceneConfig.bgClr.r, sceneConfig.bgClr.g, sceneConfig.bgClr.b, 1));

    // create the mask selection canvas
    const maskCanvas = document.createElement('canvas');
    const maskContext = maskCanvas.getContext('2d');
    maskCanvas.setAttribute('id', 'mask-canvas');
    maskContext.globalCompositeOperation = 'copy';

    const mask = {
        canvas: maskCanvas,
        context: maskContext
    };

    // tool manager
    const toolManager = new ToolManager(events);
    toolManager.register('rectSelection', new RectSelection(events, editorUI.toolsContainer.dom));
    toolManager.register('brushSelection', new BrushSelection(events, editorUI.toolsContainer.dom, mask));
    toolManager.register('polygonSelection', new PolygonSelection(events, editorUI.toolsContainer.dom, mask));
    toolManager.register('lassoSelection', new LassoSelection(events, editorUI.toolsContainer.dom, mask));
    toolManager.register('sphereSelection', new SphereSelection(events, scene, editorUI.canvasContainer));
    toolManager.register('move', new MoveTool(events, scene));
    toolManager.register('rotate', new RotateTool(events, scene));
    toolManager.register('scale', new ScaleTool(events, scene));

    editorUI.toolsContainer.dom.appendChild(maskCanvas);

    window.scene = scene;

    registerEditorEvents(events, editHistory, scene);
    registerSelectionEvents(events, scene);
    registerTransformHandlerEvents(events);
    initShortcuts(events);
    await initFileHandler(scene, events, editorUI.appContainer.dom, remoteStorageDetails);

    // Flutter에서 파일 경로를 전달받아 처리하는 함수
    window.loadFileFromFlutter = function (filePath) {
        console.log("Received file path from Flutter:", filePath);
        // AssetLoader를 사용하여 파일 로드
        const loader = new AssetLoader(scene.graphicsDevice, scene.app.assets, scene.events);

        loader.loadModel({
            url: filePath, // Flutter에서 전달된 파일 경로
            filename: filePath.split('/').pop(), // 파일명 추출
        })
            .then((splat) => {
                // 씬에 모델 추가
                scene.add(splat);
                console.log("Model loaded successfully!");
            })
            .catch((err) => {
                console.error("Error loading model:", err);
            });
    };

    // window.loadFileFromFlutter = function (fileData, fileName) {
    //     console.log("Received file data from Flutter for:", fileName);
      
    //     fetch(fileData)
    //       .then(response => {
    //         if (!response.ok) {
    //           throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         return response.blob();
    //       })
    //       .then(blob => {
    //         const url = URL.createObjectURL(blob); // Blob을 URL로 변환
    //         console.log("Blob URL:", url);
      
    //         // Supersplat에서 로드
    //         events.invoke('load', url, fileName);
    //       })
    //       .catch(err => {
    //         console.error("Error loading file:", err);
    //       });
    //   };

    // window.loadFileFromFlutter = function (filePath) {
    //     console.log("Received file path from Flutter:", filePath);
      
    //     fetch(filePath)
    //       .then(response => {
    //         if (!response.ok) {
    //           throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         return response.blob();
    //       })
    //       .then(blob => {
    //         const url = URL.createObjectURL(blob);
    //         console.log("Blob URL:", url);
      
    //         // Supersplat에서 처리
    //         const filename = filePath.split('/').pop();
    //         events.invoke('load', url, filename);
    //       })
    //       .catch(err => {
    //         console.error("Error loading file:", err);
    //       });
    //   };
    
    await scene.load();

    // handle load params
    const loadList = url.searchParams.getAll('load');
    for (const value of loadList) {
        await events.invoke('load', decodeURIComponent(value));
    }

    // handle OS-based file association in PWA mode
    if ('launchQueue' in window) {
        window.launchQueue.setConsumer(async (launchParams: LaunchParams) => {
            for (const file of launchParams.files) {
                const blob = await file.getFile();
                const url = URL.createObjectURL(blob);
                await events.invoke('load', url, file.name);
                URL.revokeObjectURL(url);
            }
        });
    }
};

export { main };
