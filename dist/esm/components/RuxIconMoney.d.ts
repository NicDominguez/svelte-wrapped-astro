import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMoneyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMoney["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMoney["size"];
}
interface RuxIconMoneyEvents {
}
interface RuxIconMoneySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMoney extends SvelteComponent {
    $$prop_def: RuxIconMoneyProps;
    $$events_def: RuxIconMoneyEvents;
    $$slot_def: RuxIconMoneySlots;
    $on<K extends keyof RuxIconMoneyEvents>(type: K, callback: (e: RuxIconMoneyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMoneyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMoneyElement | undefined;
}
export default RuxIconMoney;
