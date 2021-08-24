import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAttachMoneyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAttachMoney["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAttachMoney["size"];
}
interface RuxIconAttachMoneyEvents {
}
interface RuxIconAttachMoneySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAttachMoney extends SvelteComponent {
    $$prop_def: RuxIconAttachMoneyProps;
    $$events_def: RuxIconAttachMoneyEvents;
    $$slot_def: RuxIconAttachMoneySlots;
    $on<K extends keyof RuxIconAttachMoneyEvents>(type: K, callback: (e: RuxIconAttachMoneyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAttachMoneyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAttachMoneyElement | undefined;
}
export default RuxIconAttachMoney;
