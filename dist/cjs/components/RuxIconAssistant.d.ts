import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAssistantProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAssistant["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAssistant["size"];
}
interface RuxIconAssistantEvents {
}
interface RuxIconAssistantSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAssistant extends SvelteComponent {
    $$prop_def: RuxIconAssistantProps;
    $$events_def: RuxIconAssistantEvents;
    $$slot_def: RuxIconAssistantSlots;
    $on<K extends keyof RuxIconAssistantEvents>(type: K, callback: (e: RuxIconAssistantEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAssistantProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAssistantElement | undefined;
}
export default RuxIconAssistant;
