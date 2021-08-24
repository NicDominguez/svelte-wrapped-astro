import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSyncProblemProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSyncProblem["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSyncProblem["size"];
}
interface RuxIconSyncProblemEvents {
}
interface RuxIconSyncProblemSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSyncProblem extends SvelteComponent {
    $$prop_def: RuxIconSyncProblemProps;
    $$events_def: RuxIconSyncProblemEvents;
    $$slot_def: RuxIconSyncProblemSlots;
    $on<K extends keyof RuxIconSyncProblemEvents>(type: K, callback: (e: RuxIconSyncProblemEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSyncProblemProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSyncProblemElement | undefined;
}
export default RuxIconSyncProblem;
