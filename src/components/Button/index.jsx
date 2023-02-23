import { Container } from './styles';

export function Button({title, icon: Icon, loading = false, dark = false, ...rest}){
    return(
        <Container
        type="button"
        disabled = {loading}
        dark = {dark}
        {...rest}
        >
            {Icon && <Icon size={20}/>}
            {loading ? "Carregando..." : title}
        </Container>
    )
}