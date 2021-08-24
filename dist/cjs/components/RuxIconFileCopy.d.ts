import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFileCopyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFileCopy["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFileCopy["size"];
}
interface RuxIconFileCopyEvents {
}
interface RuxIconFileCopySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFileCopy extends SvelteComponent {
    $$prop_def: RuxIconFileCopyProps;
    $$events_def: RuxIconFileCopyEvents;
    $$slot_def: RuxIconFileCopySlots;
    $on<K extends keyof RuxIconFileCopyEvents>(type: K, callback: (e: RuxIconFileCopyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFileCopyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFileCopyElement | undefined;
}
export default RuxIconFileCopy;
