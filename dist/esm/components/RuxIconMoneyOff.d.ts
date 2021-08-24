import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMoneyOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMoneyOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMoneyOff["size"];
}
interface RuxIconMoneyOffEvents {
}
interface RuxIconMoneyOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMoneyOff extends SvelteComponent {
    $$prop_def: RuxIconMoneyOffProps;
    $$events_def: RuxIconMoneyOffEvents;
    $$slot_def: RuxIconMoneyOffSlots;
    $on<K extends keyof RuxIconMoneyOffEvents>(type: K, callback: (e: RuxIconMoneyOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMoneyOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMoneyOffElement | undefined;
}
export default RuxIconMoneyOff;
