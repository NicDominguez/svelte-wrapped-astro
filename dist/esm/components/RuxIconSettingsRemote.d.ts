import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsRemoteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsRemote["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsRemote["size"];
}
interface RuxIconSettingsRemoteEvents {
}
interface RuxIconSettingsRemoteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsRemote extends SvelteComponent {
    $$prop_def: RuxIconSettingsRemoteProps;
    $$events_def: RuxIconSettingsRemoteEvents;
    $$slot_def: RuxIconSettingsRemoteSlots;
    $on<K extends keyof RuxIconSettingsRemoteEvents>(type: K, callback: (e: RuxIconSettingsRemoteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsRemoteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsRemoteElement | undefined;
}
export default RuxIconSettingsRemote;
