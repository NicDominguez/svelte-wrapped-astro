import { Components } from '@astrouxds/astro-web-components';
interface RuxIconUnfoldMoreProps {
    /** The fill color for the icon */
    color?: Components.RuxIconUnfoldMore["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconUnfoldMore["size"];
}
interface RuxIconUnfoldMoreEvents {
}
interface RuxIconUnfoldMoreSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconUnfoldMore extends SvelteComponent {
    $$prop_def: RuxIconUnfoldMoreProps;
    $$events_def: RuxIconUnfoldMoreEvents;
    $$slot_def: RuxIconUnfoldMoreSlots;
    $on<K extends keyof RuxIconUnfoldMoreEvents>(type: K, callback: (e: RuxIconUnfoldMoreEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconUnfoldMoreProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconUnfoldMoreElement | undefined;
}
export default RuxIconUnfoldMore;
