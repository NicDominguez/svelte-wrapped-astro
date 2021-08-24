import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhotoSizeSelectLargeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhotoSizeSelectLarge["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhotoSizeSelectLarge["size"];
}
interface RuxIconPhotoSizeSelectLargeEvents {
}
interface RuxIconPhotoSizeSelectLargeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhotoSizeSelectLarge extends SvelteComponent {
    $$prop_def: RuxIconPhotoSizeSelectLargeProps;
    $$events_def: RuxIconPhotoSizeSelectLargeEvents;
    $$slot_def: RuxIconPhotoSizeSelectLargeSlots;
    $on<K extends keyof RuxIconPhotoSizeSelectLargeEvents>(type: K, callback: (e: RuxIconPhotoSizeSelectLargeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhotoSizeSelectLargeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhotoSizeSelectLargeElement | undefined;
}
export default RuxIconPhotoSizeSelectLarge;
