export const Form = () => {
    return (
        <div>
            <form>
                <label for="Firstname">First name:</label><br />
                <input type="text" id="Firstname" name="Firstname" /><br />
                <label for="Lastname">Last name:</label><br />
                <input type="text" id="Lastname" name="Lastname" /><br />
                <br />
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label for="html">HTML</label><br/>
                <input type="radio" id="css" name="fav_language" value="CSS"/>
                <label for="css">CSS</label><br/>
                <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                <label for="javascript">JavaScript</label><br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}