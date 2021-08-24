import { Components } from '@astrouxds/astro-web-components';
interface RuxTabProps {
    /** If present, overrides which tab is selected on load / mount. By default, the first <rux-tab> item is selected. */
    selected?: Components.RuxTab["selected"];
    /** If present, sets a disabled state on this tab item, indicating it cannot be selected by user action. */
    disabled?: Components.RuxTab["disabled"];
}
interface RuxTabEvents {
}
interface RuxTabSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTab extends SvelteComponent {
    $$prop_def: RuxTabProps;
    $$events_def: RuxTabEvents;
    $$slot_def: RuxTabSlots;
    $on<K extends keyof RuxTabEvents>(type: K, callback: (e: RuxTabEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTabProps>): void;
    constructor(options: any);
    get selected(): any;
    set selected(selected: any);
    get disabled(): any;
    set disabled(disabled: any);
    get getWebComponent(): HTMLRuxTabElement | undefined;
}
export default RuxTab;
