import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStayPrimaryPortraitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStayPrimaryPortrait["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStayPrimaryPortrait["size"];
}
interface RuxIconStayPrimaryPortraitEvents {
}
interface RuxIconStayPrimaryPortraitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStayPrimaryPortrait extends SvelteComponent {
    $$prop_def: RuxIconStayPrimaryPortraitProps;
    $$events_def: RuxIconStayPrimaryPortraitEvents;
    $$slot_def: RuxIconStayPrimaryPortraitSlots;
    $on<K extends keyof RuxIconStayPrimaryPortraitEvents>(type: K, callback: (e: RuxIconStayPrimaryPortraitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStayPrimaryPortraitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStayPrimaryPortraitElement | undefined;
}
export default RuxIconStayPrimaryPortrait;
