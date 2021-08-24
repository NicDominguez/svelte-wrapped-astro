import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFindReplaceProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFindReplace["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFindReplace["size"];
}
interface RuxIconFindReplaceEvents {
}
interface RuxIconFindReplaceSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFindReplace extends SvelteComponent {
    $$prop_def: RuxIconFindReplaceProps;
    $$events_def: RuxIconFindReplaceEvents;
    $$slot_def: RuxIconFindReplaceSlots;
    $on<K extends keyof RuxIconFindReplaceEvents>(type: K, callback: (e: RuxIconFindReplaceEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFindReplaceProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFindReplaceElement | undefined;
}
export default RuxIconFindReplace;
