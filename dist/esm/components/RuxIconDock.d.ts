import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDockProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDock["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDock["size"];
}
interface RuxIconDockEvents {
}
interface RuxIconDockSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDock extends SvelteComponent {
    $$prop_def: RuxIconDockProps;
    $$events_def: RuxIconDockEvents;
    $$slot_def: RuxIconDockSlots;
    $on<K extends keyof RuxIconDockEvents>(type: K, callback: (e: RuxIconDockEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDockProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDockElement | undefined;
}
export default RuxIconDock;
