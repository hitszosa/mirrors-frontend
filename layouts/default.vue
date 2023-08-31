<template>
    <div>
        <Navbar title-name="HITSZ OSA Mirrors">
            <template v-slot:logo>
                <Icon size="3em" name="uil:github" />
            </template>
        </Navbar>
        <slot />
    </div>
</template>