import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSpellcheckProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSpellcheck["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSpellcheck["size"];
}
interface RuxIconSpellcheckEvents {
}
interface RuxIconSpellcheckSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSpellcheck extends SvelteComponent {
    $$prop_def: RuxIconSpellcheckProps;
    $$events_def: RuxIconSpellcheckEvents;
    $$slot_def: RuxIconSpellcheckSlots;
    $on<K extends keyof RuxIconSpellcheckEvents>(type: K, callback: (e: RuxIconSpellcheckEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSpellcheckProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSpellcheckElement | undefined;
}
export default RuxIconSpellcheck;
