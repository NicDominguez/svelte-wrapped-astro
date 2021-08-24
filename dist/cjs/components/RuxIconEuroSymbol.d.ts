import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEuroSymbolProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEuroSymbol["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEuroSymbol["size"];
}
interface RuxIconEuroSymbolEvents {
}
interface RuxIconEuroSymbolSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEuroSymbol extends SvelteComponent {
    $$prop_def: RuxIconEuroSymbolProps;
    $$events_def: RuxIconEuroSymbolEvents;
    $$slot_def: RuxIconEuroSymbolSlots;
    $on<K extends keyof RuxIconEuroSymbolEvents>(type: K, callback: (e: RuxIconEuroSymbolEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEuroSymbolProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEuroSymbolElement | undefined;
}
export default RuxIconEuroSymbol;
