import { Components } from '@astrouxds/astro-web-components';
interface RuxIcon3dRotationProps {
    /** The fill color for the icon */
    color?: Components.RuxIcon3dRotation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIcon3dRotation["size"];
}
interface RuxIcon3dRotationEvents {
}
interface RuxIcon3dRotationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIcon3dRotation extends SvelteComponent {
    $$prop_def: RuxIcon3dRotationProps;
    $$events_def: RuxIcon3dRotationEvents;
    $$slot_def: RuxIcon3dRotationSlots;
    $on<K extends keyof RuxIcon3dRotationEvents>(type: K, callback: (e: RuxIcon3dRotationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIcon3dRotationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIcon3dRotationElement | undefined;
}
export default RuxIcon3dRotation;
