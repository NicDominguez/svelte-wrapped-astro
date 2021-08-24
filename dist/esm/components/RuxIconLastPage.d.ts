import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLastPageProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLastPage["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLastPage["size"];
}
interface RuxIconLastPageEvents {
}
interface RuxIconLastPageSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLastPage extends SvelteComponent {
    $$prop_def: RuxIconLastPageProps;
    $$events_def: RuxIconLastPageEvents;
    $$slot_def: RuxIconLastPageSlots;
    $on<K extends keyof RuxIconLastPageEvents>(type: K, callback: (e: RuxIconLastPageEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLastPageProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLastPageElement | undefined;
}
export default RuxIconLastPage;
