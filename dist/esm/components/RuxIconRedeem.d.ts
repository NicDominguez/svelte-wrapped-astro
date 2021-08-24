import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRedeemProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRedeem["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRedeem["size"];
}
interface RuxIconRedeemEvents {
}
interface RuxIconRedeemSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRedeem extends SvelteComponent {
    $$prop_def: RuxIconRedeemProps;
    $$events_def: RuxIconRedeemEvents;
    $$slot_def: RuxIconRedeemSlots;
    $on<K extends keyof RuxIconRedeemEvents>(type: K, callback: (e: RuxIconRedeemEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRedeemProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRedeemElement | undefined;
}
export default RuxIconRedeem;
