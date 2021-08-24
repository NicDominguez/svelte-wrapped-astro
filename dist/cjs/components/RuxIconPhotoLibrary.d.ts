import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhotoLibraryProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhotoLibrary["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhotoLibrary["size"];
}
interface RuxIconPhotoLibraryEvents {
}
interface RuxIconPhotoLibrarySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhotoLibrary extends SvelteComponent {
    $$prop_def: RuxIconPhotoLibraryProps;
    $$events_def: RuxIconPhotoLibraryEvents;
    $$slot_def: RuxIconPhotoLibrarySlots;
    $on<K extends keyof RuxIconPhotoLibraryEvents>(type: K, callback: (e: RuxIconPhotoLibraryEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhotoLibraryProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhotoLibraryElement | undefined;
}
export default RuxIconPhotoLibrary;
