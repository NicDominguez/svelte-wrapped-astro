import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBorderVerticalProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBorderVertical["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBorderVertical["size"];
}
interface RuxIconBorderVerticalEvents {
}
interface RuxIconBorderVerticalSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBorderVertical extends SvelteComponent {
    $$prop_def: RuxIconBorderVerticalProps;
    $$events_def: RuxIconBorderVerticalEvents;
    $$slot_def: RuxIconBorderVerticalSlots;
    $on<K extends keyof RuxIconBorderVerticalEvents>(type: K, callback: (e: RuxIconBorderVerticalEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBorderVerticalProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBorderVerticalElement | undefined;
}
export default RuxIconBorderVertical;
