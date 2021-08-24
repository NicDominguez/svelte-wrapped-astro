import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTextRotateVerticalProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTextRotateVertical["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTextRotateVertical["size"];
}
interface RuxIconTextRotateVerticalEvents {
}
interface RuxIconTextRotateVerticalSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTextRotateVertical extends SvelteComponent {
    $$prop_def: RuxIconTextRotateVerticalProps;
    $$events_def: RuxIconTextRotateVerticalEvents;
    $$slot_def: RuxIconTextRotateVerticalSlots;
    $on<K extends keyof RuxIconTextRotateVerticalEvents>(type: K, callback: (e: RuxIconTextRotateVerticalEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTextRotateVerticalProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTextRotateVerticalElement | undefined;
}
export default RuxIconTextRotateVertical;
