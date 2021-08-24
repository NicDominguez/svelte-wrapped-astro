import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWeekendProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWeekend["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWeekend["size"];
}
interface RuxIconWeekendEvents {
}
interface RuxIconWeekendSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWeekend extends SvelteComponent {
    $$prop_def: RuxIconWeekendProps;
    $$events_def: RuxIconWeekendEvents;
    $$slot_def: RuxIconWeekendSlots;
    $on<K extends keyof RuxIconWeekendEvents>(type: K, callback: (e: RuxIconWeekendEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWeekendProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWeekendElement | undefined;
}
export default RuxIconWeekend;
