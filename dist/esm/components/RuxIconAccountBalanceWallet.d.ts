import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAccountBalanceWalletProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAccountBalanceWallet["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAccountBalanceWallet["size"];
}
interface RuxIconAccountBalanceWalletEvents {
}
interface RuxIconAccountBalanceWalletSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAccountBalanceWallet extends SvelteComponent {
    $$prop_def: RuxIconAccountBalanceWalletProps;
    $$events_def: RuxIconAccountBalanceWalletEvents;
    $$slot_def: RuxIconAccountBalanceWalletSlots;
    $on<K extends keyof RuxIconAccountBalanceWalletEvents>(type: K, callback: (e: RuxIconAccountBalanceWalletEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAccountBalanceWalletProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAccountBalanceWalletElement | undefined;
}
export default RuxIconAccountBalanceWallet;
