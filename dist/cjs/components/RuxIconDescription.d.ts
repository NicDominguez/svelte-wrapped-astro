import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDescriptionProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDescription["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDescription["size"];
}
interface RuxIconDescriptionEvents {
}
interface RuxIconDescriptionSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDescription extends SvelteComponent {
    $$prop_def: RuxIconDescriptionProps;
    $$events_def: RuxIconDescriptionEvents;
    $$slot_def: RuxIconDescriptionSlots;
    $on<K extends keyof RuxIconDescriptionEvents>(type: K, callback: (e: RuxIconDescriptionEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDescriptionProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDescriptionElement | undefined;
}
export default RuxIconDescription;
