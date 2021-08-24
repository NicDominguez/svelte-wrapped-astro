import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAttachFileProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAttachFile["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAttachFile["size"];
}
interface RuxIconAttachFileEvents {
}
interface RuxIconAttachFileSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAttachFile extends SvelteComponent {
    $$prop_def: RuxIconAttachFileProps;
    $$events_def: RuxIconAttachFileEvents;
    $$slot_def: RuxIconAttachFileSlots;
    $on<K extends keyof RuxIconAttachFileEvents>(type: K, callback: (e: RuxIconAttachFileEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAttachFileProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAttachFileElement | undefined;
}
export default RuxIconAttachFile;
