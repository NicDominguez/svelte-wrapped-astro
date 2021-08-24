import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhotoFilterProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhotoFilter["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhotoFilter["size"];
}
interface RuxIconPhotoFilterEvents {
}
interface RuxIconPhotoFilterSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhotoFilter extends SvelteComponent {
    $$prop_def: RuxIconPhotoFilterProps;
    $$events_def: RuxIconPhotoFilterEvents;
    $$slot_def: RuxIconPhotoFilterSlots;
    $on<K extends keyof RuxIconPhotoFilterEvents>(type: K, callback: (e: RuxIconPhotoFilterEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhotoFilterProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhotoFilterElement | undefined;
}
export default RuxIconPhotoFilter;
