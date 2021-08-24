import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWarningProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWarning["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWarning["size"];
}
interface RuxIconWarningEvents {
}
interface RuxIconWarningSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWarning extends SvelteComponent {
    $$prop_def: RuxIconWarningProps;
    $$events_def: RuxIconWarningEvents;
    $$slot_def: RuxIconWarningSlots;
    $on<K extends keyof RuxIconWarningEvents>(type: K, callback: (e: RuxIconWarningEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWarningProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWarningElement | undefined;
}
export default RuxIconWarning;
