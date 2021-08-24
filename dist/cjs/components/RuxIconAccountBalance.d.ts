import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAccountBalanceProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAccountBalance["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAccountBalance["size"];
}
interface RuxIconAccountBalanceEvents {
}
interface RuxIconAccountBalanceSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAccountBalance extends SvelteComponent {
    $$prop_def: RuxIconAccountBalanceProps;
    $$events_def: RuxIconAccountBalanceEvents;
    $$slot_def: RuxIconAccountBalanceSlots;
    $on<K extends keyof RuxIconAccountBalanceEvents>(type: K, callback: (e: RuxIconAccountBalanceEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAccountBalanceProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAccountBalanceElement | undefined;
}
export default RuxIconAccountBalance;
