import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDashboardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDashboard["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDashboard["size"];
}
interface RuxIconDashboardEvents {
}
interface RuxIconDashboardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDashboard extends SvelteComponent {
    $$prop_def: RuxIconDashboardProps;
    $$events_def: RuxIconDashboardEvents;
    $$slot_def: RuxIconDashboardSlots;
    $on<K extends keyof RuxIconDashboardEvents>(type: K, callback: (e: RuxIconDashboardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDashboardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDashboardElement | undefined;
}
export default RuxIconDashboard;
