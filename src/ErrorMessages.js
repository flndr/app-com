export default {
    SPEARATOR_NOT_SET          : 'Set separator first with .setSeparator().',
    SPEARATOR_NO_STRING        : 'Separator must be a string.',
    SPEARATOR_LENGHT           : 'Separator length should be 1 - wtf, are you doing?',
    EVENTLIST_WRONG_FORMAT     : 'Event list must be an array or object.',
    EVENT_NAME_DUPLICATES      : 'Duplicate event names.',
    NO_EVENT_NAMES_FOUND       : 'No event names registered.',
    EVENT_NAME_NOT_REGISTERED  : 'Event name must be registered before using it.',
    EVENT_NAME_NOT_STRING      : 'Event must be a string.',
    EVENT_NAME_NO_SEPARATOR    : 'Event must start with the separator char "{0}".',
    EVENT_NAME_IS_WILDCARD     : 'Event name can not be a wildcard. It can not end with "{0}".',
    SUB_WAS_KILLED_BEFORE      : 'Tried to call a method on killed subscription.',
    SUB_WAS_STARTED_BEFORE     : 'Subscription was stared before.',
    SUB_WAS_STOPPED_BEFORE     : 'Subscription was stopped before.',
    EVENT_DATA_NOT_OBJECT      : 'Event data must be an object.',
    EVENT_CALLBACK_NOT_FUNCTION: 'Event callback must be a function.',
    REGISTER_EMPTY             : 'No events are registered. Register them before using the library!',
    REGISTER_NOT_DYNAMIC       : 'Do not change the event registry dynamically! Create a event hub an pass it at init of your app.',
    SEPARATOR_NOT_DYNAMIC      : 'Do not change the event separator dynamically! Create a event hub an pass the separator at init of your app.'
};