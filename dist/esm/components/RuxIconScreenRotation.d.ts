import { Components } from '@astrouxds/astro-web-components';
interface RuxIconScreenRotationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconScreenRotation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconScreenRotation["size"];
}
interface RuxIconScreenRotationEvents {
}
interface RuxIconScreenRotationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconScreenRotation extends SvelteComponent {
    $$prop_def: RuxIconScreenRotationProps;
    $$events_def: RuxIconScreenRotationEvents;
    $$slot_def: RuxIconScreenRotationSlots;
    $on<K extends keyof RuxIconScreenRotationEvents>(type: K, callback: (e: RuxIconScreenRotationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconScreenRotationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconScreenRotationElement | undefined;
}
export default RuxIconScreenRotation;
