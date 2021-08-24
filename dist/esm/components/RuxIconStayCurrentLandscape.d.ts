import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStayCurrentLandscapeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStayCurrentLandscape["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStayCurrentLandscape["size"];
}
interface RuxIconStayCurrentLandscapeEvents {
}
interface RuxIconStayCurrentLandscapeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStayCurrentLandscape extends SvelteComponent {
    $$prop_def: RuxIconStayCurrentLandscapeProps;
    $$events_def: RuxIconStayCurrentLandscapeEvents;
    $$slot_def: RuxIconStayCurrentLandscapeSlots;
    $on<K extends keyof RuxIconStayCurrentLandscapeEvents>(type: K, callback: (e: RuxIconStayCurrentLandscapeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStayCurrentLandscapeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStayCurrentLandscapeElement | undefined;
}
export default RuxIconStayCurrentLandscape;
