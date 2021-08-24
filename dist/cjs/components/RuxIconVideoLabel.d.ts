import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVideoLabelProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVideoLabel["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVideoLabel["size"];
}
interface RuxIconVideoLabelEvents {
}
interface RuxIconVideoLabelSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVideoLabel extends SvelteComponent {
    $$prop_def: RuxIconVideoLabelProps;
    $$events_def: RuxIconVideoLabelEvents;
    $$slot_def: RuxIconVideoLabelSlots;
    $on<K extends keyof RuxIconVideoLabelEvents>(type: K, callback: (e: RuxIconVideoLabelEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVideoLabelProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVideoLabelElement | undefined;
}
export default RuxIconVideoLabel;
