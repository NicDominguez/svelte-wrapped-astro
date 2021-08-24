import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCardGiftcardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCardGiftcard["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCardGiftcard["size"];
}
interface RuxIconCardGiftcardEvents {
}
interface RuxIconCardGiftcardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCardGiftcard extends SvelteComponent {
    $$prop_def: RuxIconCardGiftcardProps;
    $$events_def: RuxIconCardGiftcardEvents;
    $$slot_def: RuxIconCardGiftcardSlots;
    $on<K extends keyof RuxIconCardGiftcardEvents>(type: K, callback: (e: RuxIconCardGiftcardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCardGiftcardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCardGiftcardElement | undefined;
}
export default RuxIconCardGiftcard;
