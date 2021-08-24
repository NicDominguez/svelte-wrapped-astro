import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFaceProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFace["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFace["size"];
}
interface RuxIconFaceEvents {
}
interface RuxIconFaceSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFace extends SvelteComponent {
    $$prop_def: RuxIconFaceProps;
    $$events_def: RuxIconFaceEvents;
    $$slot_def: RuxIconFaceSlots;
    $on<K extends keyof RuxIconFaceEvents>(type: K, callback: (e: RuxIconFaceEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFaceProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFaceElement | undefined;
}
export default RuxIconFace;
