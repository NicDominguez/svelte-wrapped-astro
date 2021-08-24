import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSaveProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSave["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSave["size"];
}
interface RuxIconSaveEvents {
}
interface RuxIconSaveSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSave extends SvelteComponent {
    $$prop_def: RuxIconSaveProps;
    $$events_def: RuxIconSaveEvents;
    $$slot_def: RuxIconSaveSlots;
    $on<K extends keyof RuxIconSaveEvents>(type: K, callback: (e: RuxIconSaveEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSaveProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSaveElement | undefined;
}
export default RuxIconSave;
