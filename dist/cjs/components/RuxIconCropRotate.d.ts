import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCropRotateProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCropRotate["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCropRotate["size"];
}
interface RuxIconCropRotateEvents {
}
interface RuxIconCropRotateSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCropRotate extends SvelteComponent {
    $$prop_def: RuxIconCropRotateProps;
    $$events_def: RuxIconCropRotateEvents;
    $$slot_def: RuxIconCropRotateSlots;
    $on<K extends keyof RuxIconCropRotateEvents>(type: K, callback: (e: RuxIconCropRotateEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCropRotateProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCropRotateElement | undefined;
}
export default RuxIconCropRotate;
