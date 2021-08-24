import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPanToolProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPanTool["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPanTool["size"];
}
interface RuxIconPanToolEvents {
}
interface RuxIconPanToolSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPanTool extends SvelteComponent {
    $$prop_def: RuxIconPanToolProps;
    $$events_def: RuxIconPanToolEvents;
    $$slot_def: RuxIconPanToolSlots;
    $on<K extends keyof RuxIconPanToolEvents>(type: K, callback: (e: RuxIconPanToolEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPanToolProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPanToolElement | undefined;
}
export default RuxIconPanTool;
