type MaybeString = string | null | undefined;
type NotNullableString = NonNullable<MaybeString>;

const exampleString: NotNullableString = 'Hello';
console.log('Not Nullable String:', exampleString); // "Not Nullable String: Hello"
