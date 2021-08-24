import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsApplicationsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsApplications["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsApplications["size"];
}
interface RuxIconSettingsApplicationsEvents {
}
interface RuxIconSettingsApplicationsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsApplications extends SvelteComponent {
    $$prop_def: RuxIconSettingsApplicationsProps;
    $$events_def: RuxIconSettingsApplicationsEvents;
    $$slot_def: RuxIconSettingsApplicationsSlots;
    $on<K extends keyof RuxIconSettingsApplicationsEvents>(type: K, callback: (e: RuxIconSettingsApplicationsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsApplicationsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsApplicationsElement | undefined;
}
export default RuxIconSettingsApplications;
