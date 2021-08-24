import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDirectionsRunProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDirectionsRun["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDirectionsRun["size"];
}
interface RuxIconDirectionsRunEvents {
}
interface RuxIconDirectionsRunSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDirectionsRun extends SvelteComponent {
    $$prop_def: RuxIconDirectionsRunProps;
    $$events_def: RuxIconDirectionsRunEvents;
    $$slot_def: RuxIconDirectionsRunSlots;
    $on<K extends keyof RuxIconDirectionsRunEvents>(type: K, callback: (e: RuxIconDirectionsRunEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDirectionsRunProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDirectionsRunElement | undefined;
}
export default RuxIconDirectionsRun;
