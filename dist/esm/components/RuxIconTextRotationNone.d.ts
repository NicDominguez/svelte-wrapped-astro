import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTextRotationNoneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTextRotationNone["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTextRotationNone["size"];
}
interface RuxIconTextRotationNoneEvents {
}
interface RuxIconTextRotationNoneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTextRotationNone extends SvelteComponent {
    $$prop_def: RuxIconTextRotationNoneProps;
    $$events_def: RuxIconTextRotationNoneEvents;
    $$slot_def: RuxIconTextRotationNoneSlots;
    $on<K extends keyof RuxIconTextRotationNoneEvents>(type: K, callback: (e: RuxIconTextRotationNoneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTextRotationNoneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTextRotationNoneElement | undefined;
}
export default RuxIconTextRotationNone;
