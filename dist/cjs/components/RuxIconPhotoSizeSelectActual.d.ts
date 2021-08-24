import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhotoSizeSelectActualProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhotoSizeSelectActual["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhotoSizeSelectActual["size"];
}
interface RuxIconPhotoSizeSelectActualEvents {
}
interface RuxIconPhotoSizeSelectActualSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhotoSizeSelectActual extends SvelteComponent {
    $$prop_def: RuxIconPhotoSizeSelectActualProps;
    $$events_def: RuxIconPhotoSizeSelectActualEvents;
    $$slot_def: RuxIconPhotoSizeSelectActualSlots;
    $on<K extends keyof RuxIconPhotoSizeSelectActualEvents>(type: K, callback: (e: RuxIconPhotoSizeSelectActualEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhotoSizeSelectActualProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhotoSizeSelectActualElement | undefined;
}
export default RuxIconPhotoSizeSelectActual;
