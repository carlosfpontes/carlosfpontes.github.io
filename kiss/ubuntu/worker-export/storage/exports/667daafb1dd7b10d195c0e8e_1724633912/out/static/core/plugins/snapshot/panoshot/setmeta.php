<?php
$panourl = $_GET["panourl"];
$sceneview = $_GET["sceneview"];
$snapshoturl = $_GET["snapshoturl"];
$imagetype = 'image/jpeg';
$vfw = $_GET["vfw"];
$vfh = $_GET["vfh"];

$html = new DOMDocument();
libxml_use_internal_errors(true);
$html->loadHTML('<?xml encoding="utf-8">'.file_get_contents($panourl));
libxml_clear_errors();
$xp = new DOMXPath($html);

$head = $html->getElementsByTagName("head")->item(0);

$twitterImageMeta = $xp->query("//meta[@name='twitter:image']");
if ( $twitterImageMeta->length == 0 )    {
    $newTag = $html->createElement("meta");
    $newTag->setAttribute("name", "twitter:image");
    $newTag->setAttribute("content", $snapshoturl);
    $head->insertBefore($newTag,$head->firstChild);
}
else    {
    $twitterImageMeta->item(0)->setAttribute("content", $snapshoturl);
}

$ogUrlMeta = $xp->query("//meta[@property='og:url']");
if ( $ogUrlMeta->length == 0 )    {
    $newTag = $html->createElement("meta");
    $newTag->setAttribute("property", "og:url");
    $newTag->setAttribute("content", '');
    $head->insertBefore($newTag,$head->firstChild);
}
else    {
    $ogUrlMeta->item(0)->setAttribute("content", '');
}

$ogImageMeta = $xp->query("//meta[@property='og:image']");
if ( $ogImageMeta->length == 0 )    {
    $newTag = $html->createElement("meta");
    $newTag->setAttribute("property", "og:image");
    $newTag->setAttribute("content", $snapshoturl);
    $head->insertBefore($newTag,$head->firstChild);
}
else    {
    $ogImageMeta->item(0)->setAttribute("content", $snapshoturl);
}

$ogImageTypeMeta = $xp->query("//meta[@property='og:image:type']");
if ( $ogImageTypeMeta->length == 0 )    {
    $newTag = $html->createElement("meta");
    $newTag->setAttribute("property", "og:image:type");
    $newTag->setAttribute("content", $imagetype);
    $head->insertBefore($newTag,$head->firstChild);
}
else    {
    $ogImageTypeMeta->item(0)->setAttribute("content", $imagetype);
}

$ogImageWidthMeta = $xp->query("//meta[@property='og:image:width']");
if ( $ogImageWidthMeta->length == 0 )    {
    $newTag = $html->createElement("meta");
    $newTag->setAttribute("property", "og:image:width");
    $newTag->setAttribute("content", $vfw);
    $head->insertBefore($newTag,$head->firstChild);
}
else    {
    $ogImageWidthMeta->item(0)->setAttribute("content", $vfw);
}

$ogImageHeightMeta = $xp->query("//meta[@property='og:image:height']");
if ( $ogImageHeightMeta->length == 0 )    {
    $newTag = $html->createElement("meta");
    $newTag->setAttribute("property", "og:image:height");
    $newTag->setAttribute("content", $vfh);
    $head->insertBefore($newTag,$head->firstChild);
}
else    {
    $ogImageHeightMeta->item(0)->setAttribute("content", $vfh);
}

$redirectscript = $html->createElement('script','window.location.href = "'.$panourl.'?sceneview='.$sceneview.'"');
$head->insertBefore($redirectscript,$head->firstChild);

echo $html->saveHTML();

?>