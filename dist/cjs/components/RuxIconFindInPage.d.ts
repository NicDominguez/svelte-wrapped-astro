import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFindInPageProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFindInPage["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFindInPage["size"];
}
interface RuxIconFindInPageEvents {
}
interface RuxIconFindInPageSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFindInPage extends SvelteComponent {
    $$prop_def: RuxIconFindInPageProps;
    $$events_def: RuxIconFindInPageEvents;
    $$slot_def: RuxIconFindInPageSlots;
    $on<K extends keyof RuxIconFindInPageEvents>(type: K, callback: (e: RuxIconFindInPageEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFindInPageProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFindInPageElement | undefined;
}
export default RuxIconFindInPage;
