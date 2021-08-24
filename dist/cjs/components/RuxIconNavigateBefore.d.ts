import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNavigateBeforeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNavigateBefore["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNavigateBefore["size"];
}
interface RuxIconNavigateBeforeEvents {
}
interface RuxIconNavigateBeforeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNavigateBefore extends SvelteComponent {
    $$prop_def: RuxIconNavigateBeforeProps;
    $$events_def: RuxIconNavigateBeforeEvents;
    $$slot_def: RuxIconNavigateBeforeSlots;
    $on<K extends keyof RuxIconNavigateBeforeEvents>(type: K, callback: (e: RuxIconNavigateBeforeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNavigateBeforeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNavigateBeforeElement | undefined;
}
export default RuxIconNavigateBefore;
