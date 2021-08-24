import { Components } from '@astrouxds/astro-web-components';
interface RuxIconColorLensProps {
    /** The fill color for the icon */
    color?: Components.RuxIconColorLens["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconColorLens["size"];
}
interface RuxIconColorLensEvents {
}
interface RuxIconColorLensSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconColorLens extends SvelteComponent {
    $$prop_def: RuxIconColorLensProps;
    $$events_def: RuxIconColorLensEvents;
    $$slot_def: RuxIconColorLensSlots;
    $on<K extends keyof RuxIconColorLensEvents>(type: K, callback: (e: RuxIconColorLensEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconColorLensProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconColorLensElement | undefined;
}
export default RuxIconColorLens;
