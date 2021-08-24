import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhotoSizeSelectSmallProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhotoSizeSelectSmall["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhotoSizeSelectSmall["size"];
}
interface RuxIconPhotoSizeSelectSmallEvents {
}
interface RuxIconPhotoSizeSelectSmallSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhotoSizeSelectSmall extends SvelteComponent {
    $$prop_def: RuxIconPhotoSizeSelectSmallProps;
    $$events_def: RuxIconPhotoSizeSelectSmallEvents;
    $$slot_def: RuxIconPhotoSizeSelectSmallSlots;
    $on<K extends keyof RuxIconPhotoSizeSelectSmallEvents>(type: K, callback: (e: RuxIconPhotoSizeSelectSmallEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhotoSizeSelectSmallProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhotoSizeSelectSmallElement | undefined;
}
export default RuxIconPhotoSizeSelectSmall;
