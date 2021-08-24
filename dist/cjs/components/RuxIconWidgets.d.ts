import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWidgetsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWidgets["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWidgets["size"];
}
interface RuxIconWidgetsEvents {
}
interface RuxIconWidgetsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWidgets extends SvelteComponent {
    $$prop_def: RuxIconWidgetsProps;
    $$events_def: RuxIconWidgetsEvents;
    $$slot_def: RuxIconWidgetsSlots;
    $on<K extends keyof RuxIconWidgetsEvents>(type: K, callback: (e: RuxIconWidgetsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWidgetsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWidgetsElement | undefined;
}
export default RuxIconWidgets;
